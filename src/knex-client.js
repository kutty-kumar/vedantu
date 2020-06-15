import BlueBird from 'bluebird'
import knex from 'knex'

function createKnexClient({connectionString, migrationsTableName}) {
    const client = knex(connectionString);
    const migrationOptions = {
        tableName: migrationsTableName || "knex_migrations"
    };
    return BlueBird.resovle(client.migrate.latest(migrationOptions)).then(() => client)
}
