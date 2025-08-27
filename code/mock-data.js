const datas = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Player ${i + 1}`,
  avatar: `https://avatar.iran.liara.run/public/10`,
  score: Math.floor(Math.random() * 1000) + 1,
  week: (i % 4) + 1,
  month: (i % 12) + 1,
  year: 2025,
}));

export default datas;
