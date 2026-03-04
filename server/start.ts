// 仅本地run dev使用
import express from 'express';
import cors from 'cors';
import backendRoute from './index';

const app = express();
app.use(cors());
app.use(express.json());
app.use(backendRoute.path, backendRoute.router);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`后端服务已启动，端口：${PORT}`);
}); 