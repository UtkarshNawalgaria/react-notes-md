/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFolder = /* GraphQL */ `
  mutation CreateFolder(
    $input: CreateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    createFolder(input: $input, condition: $condition) {
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
`;
export const updateFolder = /* GraphQL */ `
  mutation UpdateFolder(
    $input: UpdateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    updateFolder(input: $input, condition: $condition) {
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
export const deleteFolder = /* GraphQL */ `
  mutation DeleteFolder(
    $input: DeleteFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    deleteFolder(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      title
      content
      folderId
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
