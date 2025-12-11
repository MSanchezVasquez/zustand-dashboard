import { useMemo } from "react";
import { JiraTasks } from "../../components";
import { useTaskStore } from "../../stores";
import { useTranslation } from "react-i18next";

export const JiraPage = () => {
  const { t } = useTranslation();

  const tasks = useTaskStore((state) => state.tasks);

  const pendingTasks = useMemo(
    () => Object.values(tasks).filter((t) => t.status === "open"),
    [tasks]
  );
  const inProgressTasks = useMemo(
    () => Object.values(tasks).filter((t) => t.status === "in-progress"),
    [tasks]
  );
  const doneTasks = useMemo(
    () => Object.values(tasks).filter((t) => t.status === "done"),
    [tasks]
  );

  return (
    <>
      <h1>{t("jira.title")}</h1>
      <p>{t("jira.desc")}</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks title={t("jira.pending")} tasks={pendingTasks} status="open" />

        <JiraTasks
          title={t("jira.inprogress")}
          tasks={inProgressTasks}
          status="in-progress"
        />

        <JiraTasks title={t("jira.done")} tasks={doneTasks} status="done" />
      </div>
    </>
  );
};
