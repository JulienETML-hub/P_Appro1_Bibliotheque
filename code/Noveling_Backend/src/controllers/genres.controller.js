import { models } from "../config/sequelize.js";

export async function getGenres(req, res) {
  const genres = await models.Genre.findAll();
  res.json({ message: "Liste des genres", data: genres });
}

export async function getGenreById(req, res) {
  const { id } = req.params;
  const genre = await models.Genre.findByPk(id);

  if (genre) {
    res.json({ message: "Genre trouvé", data: genre });
  } else {
    res.status(404).json({ message: "Genre non trouvé" });
  }
}

export async function getGenresByBookId(req, res) {
  const { id } = req.params;

  const genres = [];

  const genresId = await models.contenir.findAll({
    where: { idBook: id },
  });

  for (let i = 0; i < genresId.length; i++) {
    genres[i] = await models.Genre.findByPk(genresId[i].idGenre);
  }

  res.json({ message: "Liste des genres du livre", data: genres });
}
