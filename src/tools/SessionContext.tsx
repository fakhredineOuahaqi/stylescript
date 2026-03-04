// 使用该文件需要import导入，导入别名：@/tools/SessionContext
const canUseStorage = typeof window !== 'undefined' && typeof localStorage !== 'undefined';


const getTenantSessionKey = (keyName: string): string => {
    if (!canUseStorage) return keyName;
    const proj = window.location.pathname.split('/').find(part => part.startsWith('PROJ_'));
    return proj ? `${proj}_${keyName}` : keyName;
};

// User session for site frontend, stores authentication info for logged-in users and cart state. frontenduse
export class userSession {
    token: string; // user login token
    userId: string;
    username: string;
    cart: { productId: string; quantity: number }[];
    constructor() {
        this.token = '';
        this.userId = '';
        this.username = '';
        this.cart = [];
    }
}


let cacheduserSession: userSession | null | undefined = undefined;

export function setuserSession(data: userSession) {
    if (!canUseStorage) return;
    localStorage.setItem(getTenantSessionKey("userSession"), JSON.stringify(data))
    cacheduserSession = data
}

export function getuserSession():userSession | null  {
    if (cacheduserSession !== undefined) {
        return cacheduserSession
    }
    if (!canUseStorage) {
        cacheduserSession = null
        return null
    }
    const data = localStorage.getItem(getTenantSessionKey("userSession"))
    if (data) {
        cacheduserSession = JSON.parse(data) as userSession
        return cacheduserSession
    }else {
        cacheduserSession = null
        return null
    }
}

export function removeuserSession(){
    if (!canUseStorage) return;
    localStorage.removeItem(getTenantSessionKey("userSession"))
    cacheduserSession = null
}

// snake_case aliases for convenience (e.g., getbackend_user_session)
export const setuser_session = setuserSession;
export const getuser_session = getuserSession;
export const removeuser_session = removeuserSession;

// Admin session for site backend, stores authentication token and admin user info. backenduse
export class adminSession {
    token: string; // admin login token
    adminId: string;
    adminUsername: string;
    constructor() {
        this.token = '';
        this.adminId = '';
        this.adminUsername = '';
    }
}


let cachedadminSession: adminSession | null | undefined = undefined;

export function setadminSession(data: adminSession) {
    if (!canUseStorage) return;
    localStorage.setItem(getTenantSessionKey("adminSession"), JSON.stringify(data))
    cachedadminSession = data
}

export function getadminSession():adminSession | null  {
    if (cachedadminSession !== undefined) {
        return cachedadminSession
    }
    if (!canUseStorage) {
        cachedadminSession = null
        return null
    }
    const data = localStorage.getItem(getTenantSessionKey("adminSession"))
    if (data) {
        cachedadminSession = JSON.parse(data) as adminSession
        return cachedadminSession
    }else {
        cachedadminSession = null
        return null
    }
}

export function removeadminSession(){
    if (!canUseStorage) return;
    localStorage.removeItem(getTenantSessionKey("adminSession"))
    cachedadminSession = null
}

// snake_case aliases for convenience (e.g., getbackend_user_session)
export const setadmin_session = setadminSession;
export const getadmin_session = getadminSession;
export const removeadmin_session = removeadminSession;
