/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserPreference = /* GraphQL */ `
  subscription OnCreateUserPreference {
    onCreateUserPreference {
      id
      newsBlogsClubsPreference {
        academics
        activism
        careers
        culture
        gradSchool
        healthAndWellbeing
        recreation
        religion
        research
        sports
      }
      sportsPreference {
        mensSportsList {
          baseball
          basketball
          crew
          crossCountry
          football
          golf
          iceHockey
          lacrosse
          skiing
          soccer
          squash
          swimmingAndDriving
          tennis
          trackAndField
          wrestling
        }
        womensSportsList {
          basketball
          crew
          crossCountry
          fieldHockey
          golf
          iceHockey
          lacrosse
          skiing
          soccer
          softball
          squash
          swimmingAndDriving
          tennis
          trackAndField
          volleyball
        }
      }
      academicPreference {
        arts
        biology
        business
        chemistry
        computerScience
        economics
        engineering
        history
        mathematics
        philosophy
        physics
        psychology
        science
        statistics
      }
      eventsPreference {
        faculties
        studentServices
        subjectDepartments
        universityServices
      }
      emailNotification
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserPreference = /* GraphQL */ `
  subscription OnUpdateUserPreference {
    onUpdateUserPreference {
      id
      newsBlogsClubsPreference {
        academics
        activism
        careers
        culture
        gradSchool
        healthAndWellbeing
        recreation
        religion
        research
        sports
      }
      sportsPreference {
        mensSportsList {
          baseball
          basketball
          crew
          crossCountry
          football
          golf
          iceHockey
          lacrosse
          skiing
          soccer
          squash
          swimmingAndDriving
          tennis
          trackAndField
          wrestling
        }
        womensSportsList {
          basketball
          crew
          crossCountry
          fieldHockey
          golf
          iceHockey
          lacrosse
          skiing
          soccer
          softball
          squash
          swimmingAndDriving
          tennis
          trackAndField
          volleyball
        }
      }
      academicPreference {
        arts
        biology
        business
        chemistry
        computerScience
        economics
        engineering
        history
        mathematics
        philosophy
        physics
        psychology
        science
        statistics
      }
      eventsPreference {
        faculties
        studentServices
        subjectDepartments
        universityServices
      }
      emailNotification
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserPreference = /* GraphQL */ `
  subscription OnDeleteUserPreference {
    onDeleteUserPreference {
      id
      newsBlogsClubsPreference {
        academics
        activism
        careers
        culture
        gradSchool
        healthAndWellbeing
        recreation
        religion
        research
        sports
      }
      sportsPreference {
        mensSportsList {
          baseball
          basketball
          crew
          crossCountry
          football
          golf
          iceHockey
          lacrosse
          skiing
          soccer
          squash
          swimmingAndDriving
          tennis
          trackAndField
          wrestling
        }
        womensSportsList {
          basketball
          crew
          crossCountry
          fieldHockey
          golf
          iceHockey
          lacrosse
          skiing
          soccer
          softball
          squash
          swimmingAndDriving
          tennis
          trackAndField
          volleyball
        }
      }
      academicPreference {
        arts
        biology
        business
        chemistry
        computerScience
        economics
        engineering
        history
        mathematics
        philosophy
        physics
        psychology
        science
        statistics
      }
      eventsPreference {
        faculties
        studentServices
        subjectDepartments
        universityServices
      }
      emailNotification
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUserData = /* GraphQL */ `
  subscription OnCreateUserData {
    onCreateUserData {
      id
      SPUID
      displayName
      yearLevel
      email
      primarySpecialization
      campus
      faculty
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserData = /* GraphQL */ `
  subscription OnUpdateUserData {
    onUpdateUserData {
      id
      SPUID
      displayName
      yearLevel
      email
      primarySpecialization
      campus
      faculty
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserData = /* GraphQL */ `
  subscription OnDeleteUserData {
    onDeleteUserData {
      id
      SPUID
      displayName
      yearLevel
      email
      primarySpecialization
      campus
      faculty
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSavedItemsTable = /* GraphQL */ `
  subscription OnCreateSavedItemsTable {
    onCreateSavedItemsTable {
      id
      savedItems {
        id
        title
        image
        link
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSavedItemsTable = /* GraphQL */ `
  subscription OnUpdateSavedItemsTable {
    onUpdateSavedItemsTable {
      id
      savedItems {
        id
        title
        image
        link
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSavedItemsTable = /* GraphQL */ `
  subscription OnDeleteSavedItemsTable {
    onDeleteSavedItemsTable {
      id
      savedItems {
        id
        title
        image
        link
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
