"use-server";

export async function createProfile(data: InsertProfile) {
  try {
    const [newProfile] = await db
      .insert(profilesTable)
      .values(data)
      .returning();
    return newProfile;
  } catch (error) {
    console.error("Error creating profile: ", error);
    throw new Error("Failed to create profile");
  }
}
