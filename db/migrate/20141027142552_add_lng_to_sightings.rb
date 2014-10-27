class AddLngToSightings < ActiveRecord::Migration
  def change
        add_column :sightings, :lng, :integer

  end
end
