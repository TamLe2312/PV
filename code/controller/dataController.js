import { StatusCodes } from "http-status-codes";
import datas from "../mock-data.js";

const getDatas = async (req, res) => {
  try {
    const sorted = [...datas].sort((a, b) => b.score - a.score);
    const ranked = sorted.map((item, idx) => ({
      ...item,
      rank: idx + 1,
    }));
    return res.status(StatusCodes.OK).json({
      ranked,
      total: ranked.length,
    });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("Có lỗi xảy ra xin thử lại sau");
  }
};

const getRankById = async (req, res) => {
  try {
    const id = parseInt(req.params.id) || 0;
    const { month, week, year, page = 1, limit = 10 } = req.query;
    let filtered = datas;
    if (month) filtered = filtered.filter((d) => d.month === parseInt(month));
    if (week) filtered = filtered.filter((d) => d.week === parseInt(week));
    if (year) filtered = filtered.filter((d) => d.year === parseInt(year));

    const sorted = [...filtered].sort((a, b) => b.score - a.score);
    const ranked = sorted.map((item, idx) => ({
      ...item,
      rank: idx + 1,
    }));

    // console.log(ranked);
    let player = ranked.find((item) => item.id === id);
    if (!player) {
      player = "Người chơi không tham gia bảng xếp hạng";
    }

    const start = (page - 1) * limit;
    const end = start + parseInt(limit);
    const leaderboard = ranked.slice(start, end);

    return res.status(StatusCodes.OK).json({
      player,
      leaderboard,
      total: ranked.length,
    });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("Có lỗi xảy ra xin thử lại sau");
  }
};

export const dataController = {
  getDatas,
  getRankById,
};
