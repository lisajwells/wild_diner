class AddLatToSightings < ActiveRecord::Migration
  def change
    add_column :sightings, :lat, :integer
  end
end
