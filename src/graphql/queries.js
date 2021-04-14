/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFolder = /* GraphQL */ `
  query GetFolder($id: ID!) {
    getFolder(id: $id) {
      id
      title
      notes {
        items {
          id
          folderId
          title
          content
        }
      }
    }
  }
`;
export const listFolders = /* GraphQL */ `
  query ListFolders(
    $filter: ModelFolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        notes {
          items {
            id
            title
          }
        }
      }
    }
  }
`;
export const foldersByDate = /* GraphQL */ `
  query FoldersByDate(
    $id: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    foldersByDate(
      id: $id
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        createdAt
        updatedAt
        owner
        notes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      title
      content
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        folderId
        title
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const notesByDate = /* GraphQL */ `
  query NotesByDate(
    $id: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByDate(
      id: $id
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        folderId
        title
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
