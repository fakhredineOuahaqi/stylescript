// 仅本地run dev使用
import express from 'express';
import cors from 'cors';
import backendRoute from './index';

const app = express();

const parseCorsOrigins = () => {
  const raw = process.env.CORS_ORIGIN?.trim();
  if (!raw) return true;
  return raw.split(',').map(o => o.trim()).filter(Boolean);
};

app.use(cors({
  origin: parseCorsOrigins()
}));
app.use(express.json());

app.get('/healthz', (_req, res) => {
  res.status(200).json({ ok: true, service: 'stylescript-backend' });
});

app.use(backendRoute.path, backendRoute.router);

const PORT = Number(process.env.PORT || 3001);
app.listen(PORT, () => {
  console.log(`后端服务已启动，端口：${PORT}, path: ${backendRoute.path}`);
}); 
