class ChangeLngToDecimal < ActiveRecord::Migration

  def up
    change_column :sightings, :lng, :decimal
  end

  def down
    change_column :sightings, :lng, :integer
  end

end
