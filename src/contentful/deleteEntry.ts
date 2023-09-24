import { config } from "../config";
import { clientCMA } from "./client";
import { getEntriesFromFields } from "./getEntry";

export function deleteEntryById({ entryId }: { entryId: string }) {
  clientCMA.getSpace(config.SPACE_ID)
    .then(space => space.getEnvironment('master'))
    .then(environment => {
      return environment.getEntry(entryId);
    })
    .then(async entry => {
      await entry.unpublish();
      await entry.delete();
    })
    .then(() => console.log(`Entry ${entryId} deleted.`))
    .catch((error) => {
      console.error(error);
    });
}

export async function deleteEntryByField({ contentType, fields}: { contentType: string, fields: any }) {
  const entries = await getEntriesFromFields({ contentType, fields });

  if (entries && entries.length > 0) {
    const entry = entries[0];
    const id = entry.sys.id;
    deleteEntryById({ entryId: id });
  }
  else {
    throw Error;
  }
}