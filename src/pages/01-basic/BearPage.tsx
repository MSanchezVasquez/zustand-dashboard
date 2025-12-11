import { useShallow } from "zustand/shallow";
import { WhiteCard } from "../../components";
import { useBearStore } from "../../stores";
import { useTranslation } from "react-i18next";

export const BearPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("bears.title")}</h1>
      <p>{t("bears.subtitle")}</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears />
        <PolarBears />
        <PandaBears />
        <BearDisplay />
      </div>
    </>
  );
};

export const BlackBears = () => {
  const { t } = useTranslation();
  const blackBears = useBearStore((state) => state.blackBears);
  const increaseBlackBears = useBearStore((state) => state.increaseBlackBeards);

  return (
    <WhiteCard centered>
      <h2>{t("bears.black")}</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBlackBears(+1)}>+1</button>
        <span className="text-3xl mx-2 lg:mx-10">{blackBears}</span>
        <button onClick={() => increaseBlackBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

export const PolarBears = () => {
  const { t } = useTranslation();
  const polarBears = useBearStore((state) => state.polarBears);
  const increasePolarBears = useBearStore((state) => state.increasePolarBeards);

  return (
    <WhiteCard centered>
      <h2>{t("bears.polar")}</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePolarBears(+1)}>+1</button>
        <span className="text-3xl mx-2 lg:mx-10">{polarBears}</span>
        <button onClick={() => increasePolarBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

export const PandaBears = () => {
  const { t } = useTranslation();
  const pandaBears = useBearStore((state) => state.pandaBears);
  const increasePandaBears = useBearStore((state) => state.increasePandaBears);

  return (
    <WhiteCard centered>
      <h2>{t("bears.panda")}</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePandaBears(+1)}>+1</button>
        <span className="text-3xl mx-2 lg:mx-10">{pandaBears}</span>
        <button onClick={() => increasePandaBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

export const BearDisplay = () => {
  const { t } = useTranslation();
  const bears = useBearStore(useShallow((state) => state.bears));
  const addBear = useBearStore((state) => state.addBear);
  const clearBears = useBearStore((state) => state.clearBears);
  const doNothing = useBearStore((state) => state.doNothing);

  return (
    <WhiteCard>
      <h1>{t("bears.all")}</h1>

      <button onClick={doNothing}>{t("bears.doNothing")}</button>
      <button className="mt-2" onClick={addBear}>
        {t("bears.add")}
      </button>
      <button className="mt-2" onClick={clearBears}>
        {t("bears.clear")}
      </button>

      <pre>{JSON.stringify(bears, null, 2)}</pre>
    </WhiteCard>
  );
};
