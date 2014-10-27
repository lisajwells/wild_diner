class RenameUsernameIdToUserId < ActiveRecord::Migration
  def change
    rename_column :sightings, :username_id, :user_id
  end
end
