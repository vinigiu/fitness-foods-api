import app from './server/app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
