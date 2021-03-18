'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddDueDateToProjectsSchema extends Schema {
  up () {
    this.table('projects', (table) => {
      // alter table
      table.date('due_date')
    })
  }

  down () {
    this.table('projects', (table) => {
      // reverse alternations
      table.dropColumn('due_date')
    })
  }
}

module.exports = AddDueDateToProjectsSchema
