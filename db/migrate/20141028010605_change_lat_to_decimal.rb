class ChangeLatToDecimal < ActiveRecord::Migration
  def up
    change_column :sightings, :lat, :decimal
  end

  def down
    change_column :sightings, :lat, :integer
  end
end
