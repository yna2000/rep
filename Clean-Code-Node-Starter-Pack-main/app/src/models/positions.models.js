// eslint-disable-next-line import/no-cycle
import { database } from 'database';

export const Positions = database.sequelize.define('positions', {
	title: {
		type: database.Sequelize.STRING,
		allowNull: false,
	},
});
