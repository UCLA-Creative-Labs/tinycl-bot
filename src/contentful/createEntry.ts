import { config } from "../config";
import { clientCMA } from "./client";
import { deleteEntryById } from "./deleteEntry";

export async function createEntry({ contentTypeId, data }: { contentTypeId: string, data: any }) {
  let newEntryId: string;

  return clientCMA.getSpace(config.SPACE_ID)
    .then(space => space.getEnvironment('master'))
    .then(environment => environment.createEntry(contentTypeId, data))
    .then(entry => {
      newEntryId = entry.sys.id;
      return entry.publish();
    })
    .then(entry => {
      console.log(`Entry ${entry.sys.id} published.`);
      return entry;
    })
    .catch(error => {
      console.error(error);
      console.error(`Cannot create entry, deleting ${newEntryId}...`);
      deleteEntryById({ entryId: newEntryId });
      return error;
    });
}