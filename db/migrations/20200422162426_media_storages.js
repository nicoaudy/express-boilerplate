exports.up = knex => {
	return knex.schema.createTable("media_storages", t => {
		t.increments("id")
			.primary()
			.unsigned();
		t.string("filename").notNullable();
		t.string("path").notNullable();
		t.integer("identifier").notNullable();
		t.string("identifier_name").notNullable();
		t.timestamp("created_at").defaultTo(knex.fn.now());
		t.timestamp("updated_at").defaultTo(knex.fn.now());
	});
};

exports.down = knex => {
	return knex.schema.dropTable("media_storages");
};
