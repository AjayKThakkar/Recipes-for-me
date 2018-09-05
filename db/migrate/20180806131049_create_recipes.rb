class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.timestamps null: false
      t.belongs_to :users
    end
  end
end
