import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserPreferencesList } from "./userPreferences/UserPreferencesList";
import { UserPreferencesCreate } from "./userPreferences/UserPreferencesCreate";
import { UserPreferencesEdit } from "./userPreferences/UserPreferencesEdit";
import { UserPreferencesShow } from "./userPreferences/UserPreferencesShow";
import { EventRecordList } from "./eventRecord/EventRecordList";
import { EventRecordCreate } from "./eventRecord/EventRecordCreate";
import { EventRecordEdit } from "./eventRecord/EventRecordEdit";
import { EventRecordShow } from "./eventRecord/EventRecordShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"BlogEventService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserPreferences"
          list={UserPreferencesList}
          edit={UserPreferencesEdit}
          create={UserPreferencesCreate}
          show={UserPreferencesShow}
        />
        <Resource
          name="EventRecord"
          list={EventRecordList}
          edit={EventRecordEdit}
          create={EventRecordCreate}
          show={EventRecordShow}
        />
      </Admin>
    </div>
  );
};

export default App;
