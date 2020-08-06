"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("ranking", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ranking: {
                type: Sequelize.INTEGER
            },
            airlineId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'airlines',
                    key: 'id'
                },
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("ranking");
    }
};
