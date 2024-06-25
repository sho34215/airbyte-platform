import { ConnectionSyncContextProvider } from "components/connection/ConnectionSync/ConnectionSyncContext";
import { FlexContainer } from "components/ui/Flex";

import { useExperiment } from "hooks/services/Experiment";

import { ConnectionStatusCard } from "./ConnectionStatusCard";
import { ConnectionStatusMessages } from "./ConnectionStatusMessages";
import { ConnectionSyncStatusCard } from "./ConnectionSyncStatusCard";
import { NextStreamsList } from "./NextStreamsList";
import { StreamsList } from "./StreamsList";
import { StreamsListContextProvider } from "./StreamsListContext";
import styles from "./StreamStatusPage.module.scss";

export const StreamStatusPage = () => {
  const isSimplifiedCreation = useExperiment("connection.simplifiedCreation", true);
  const showSyncProgress = useExperiment("connection.syncProgress", true);

  return (
    <ConnectionSyncContextProvider>
      <StreamsListContextProvider>
        <FlexContainer direction="column" gap="md" className={styles.container}>
          {isSimplifiedCreation ? (
            <>
              <ConnectionStatusMessages />
              <ConnectionSyncStatusCard />
            </>
          ) : (
            <ConnectionStatusCard />
          )}
          {showSyncProgress ? <NextStreamsList /> : <StreamsList />}
        </FlexContainer>
      </StreamsListContextProvider>
    </ConnectionSyncContextProvider>
  );
};
