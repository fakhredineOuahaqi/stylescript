import type {Entities} from "../../server/entities.type"
import { toast } from "sonner";

type EntityMethod = {
  [key: string]: (...args: any[]) => Promise<any>;
};

class EntitiesProxy {
  private baseUrl: string;

  constructor(baseUrl: string = "http://localhost:3001/BACKEND_PROJ_d6d2bb86_snap_20260304_033524_835/api/entities") {
    this.baseUrl = baseUrl;
  }

  public getProxy(): Entities {
    return new Proxy({} as Entities, {
      get: (_, entity: keyof Entities) => {
        return this.createEntityProxy(entity.toString());
      }
    });
  }

  private createEntityProxy(entity: string): EntityMethod {
    return new Proxy({} as EntityMethod, {
      get: (_, method: string) => {
        return (...args: any[]) => this.executeRequest(entity, method, args);
      }
    });
  }

  private serializeData(data: any): any {
    if (typeof data === "bigint") {
      return { __type: "BigInt", value: data.toString() };
    }

    if (data instanceof Date) {
      const offset = -data.getTimezoneOffset();
      const localTime = new Date(data.getTime() + offset * 60 * 1000);
      const isoWithOffset = localTime.toISOString().replace('Z', this.formatOffset(offset));

      return {
        __type: 'Date',
        value: data.toISOString(),
        localValue: isoWithOffset,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        offset: offset
      };
    }

    if (Array.isArray(data)) {
      return data.map((a) => this.serializeData(a));
    }

    if (data && typeof data === 'object') {
      return Object.fromEntries(
        Object.entries(data).map(([k, v]) => [k, this.serializeData(v)])
      );
    }

    return data;
  }

  private formatOffset(offsetMinutes: number): string {
    const sign = offsetMinutes >= 0 ? '+' : '-';
    const abs = Math.abs(offsetMinutes);
    const hours = String(Math.floor(abs / 60)).padStart(2, '0');
    const mins = String(abs % 60).padStart(2, '0');
    return `${sign}${hours}:${mins}`;
  }

  private deserializeData(data: any): any {
    if (data?.__type === 'Date') {
      if (data.localValue) {
        return new Date(data.localValue);
      } else {
        const raw = data.value;
        if (typeof raw === 'string' && !raw.includes('T') && !raw.endsWith('Z')) {
          const patched = raw.replace(' ', 'T') + 'Z';
          return new Date(patched);
        }
        return new Date(raw);
      }
    }

    if (data?.__type === "BigInt") {
      return BigInt(data.value);
    }

    if (Array.isArray(data)) {
      return data.map((a) => this.deserializeData(a));
    }

    if (data && typeof data === 'object') {
      return Object.fromEntries(
        Object.entries(data).map(([k, v]) => [k, this.deserializeData(v)])
      );
    }

    return data;
  }

  private async executeRequest<T>(
    entity: string,
    method: string,
    args: any[]
  ): Promise<T> {
    try {
      const serializedArgs = this.serializeData(args);
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entity, method, args: serializedArgs })
      });

      const result = await response.json();

      if (!result.success) {
        toast.error(result?.message || result?.error || 'Request failed');
        throw new Error(result.error || 'Request failed');
      }

      if (method === "Update") {
        return await this.executeRequest(entity,"Get",[args[0]["where"]])
      }
      if (method === "Create") {
        return await this.executeRequest(entity,"Get",[{id: result.data.id}])
      }
      return this.deserializeData(result.data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`EntitiesProxy Error: ${errorMessage}`);
    }
  }
}

export const entities = new EntitiesProxy().getProxy();
