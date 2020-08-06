"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("bankcrupt", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            bancrupt: {
                type: Sequelize.BOOLEAN
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
        return queryInterface.dropTable("bankcrupt");
    }
};
