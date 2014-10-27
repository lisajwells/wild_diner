class CreateSightings < ActiveRecord::Migration
  def change
    create_table :sightings do |t|
      t.string :food
      t.string :location
      t.string :season
      t.string :photo_url
      t.integer :username_id
      t.timestamps
    end
  end
end
