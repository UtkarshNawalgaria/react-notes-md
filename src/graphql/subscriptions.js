/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFolder = /* GraphQL */ `
  subscription OnCreateFolder($owner: String!) {
    onCreateFolder(owner: $owner) {
      id
      title
      createdAt
      updatedAt
      owner
      notes {
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
  }
`;
export const onUpdateFolder = /* GraphQL */ `
  subscription OnUpdateFolder($owner: String!) {
    onUpdateFolder(owner: $owner) {
      id
      title
      createdAt
      updatedAt
      owner
      notes {
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
  }
`;
export const onDeleteFolder = /* GraphQL */ `
  subscription OnDeleteFolder($owner: String!) {
    onDeleteFolder(owner: $owner) {
      id
      title
      createdAt
      updatedAt
      owner
      notes {
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
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String!) {
    onCreateNote(owner: $owner) {
      id
      folderId
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String!) {
    onUpdateNote(owner: $owner) {
      id
      folderId
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String!) {
    onDeleteNote(owner: $owner) {
      id
      folderId
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
