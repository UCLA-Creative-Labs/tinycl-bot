/* Create new TinyCL link */

import { createClient } from "contentful-management";
import { config } from "../config";
import { deleteEntryById } from "./deleteEntry";
import { createEntry } from "./createEntry";
import { getEntry } from "./getEntry";

export async function TEST() {
  const client = createClient({
    accessToken: config.CMA_TOKEN
  });

  // client.getSpace(config.SPACE_ID)
  // .then(space => space.getEnvironment('master'))
  // .then(environment => environment.getContentType('link'))
  // .then(contentType => console.log(contentType))
  // .catch(console.error);

  getEntry({ entryId: "1D7roIfO87AjK72qJe1kmP"});

  createEntry({
    contentTypeId: 'link',
    data: {
      fields: {
        displayName: {
          "en-US": 'testname'
        },
        url: {
          "en-US": 'https://google.com'
        },
        redirectPath: {
          "en-US": 'testpath'
        }
      }
    }
  })
}