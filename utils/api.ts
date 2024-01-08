const createURL = (path: string) => {
  return window.location.origin + path;
};

export const updatedEntry = async (id: string, content: string) => {
  const response = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    })
  );

  if (response.ok) {
    const data = await response.json();
    return data.data;
  }

  /**
   * TODO:(Error handling)
   * send and object back to UI with error code and error message
   * saying why the processing of the request failed!
   * so that UI can display appropriate message/banner on FE side
   * also add try/catch within response.ok in case
   * the json processing fails due to some reason!
   */
};

export const createNewEntry = async () => {
  const response = await fetch(
    new Request(createURL("/api/journal"), {
      method: "POST",
    })
  );

  if (response.ok) {
    const data = await response.json();
    return data.data;
  }

  /**
   * TODO:(Error handling)
   * send and object back to UI with error code and error message
   * saying why the processing of the request failed!
   * so that UI can display appropriate message/banner on FE side
   * also add try/catch within response.ok in case
   * the json processing fails due to some reason!
   */
};
