alias RethinkDB.Query, as: ReQL
alias ElixirCljs.DB

ReQL.table_create("users", primary_key: "username")
|> DB.run
|> IO.inspect