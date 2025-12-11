import { FormEvent } from "react";
import { WhiteCard } from "../../components";
import { useWeddingStore } from "../../stores";
import { useTranslation } from "react-i18next";

export const WeddingInvitationPage = () => {
  const { t } = useTranslation();

  const firstName = useWeddingStore((state) => state.firstName);
  const lastName = useWeddingStore((state) => state.lastName);
  const setFirstName = useWeddingStore((state) => state.setFirstName);
  const setLastName = useWeddingStore((state) => state.setLastName);

  const guestCount = useWeddingStore((state) => state.guestCount);
  const setGuestCount = useWeddingStore((state) => state.setGuestCount);

  const eventDate = useWeddingStore((state) => state.eventDate);
  const eventTime = useWeddingStore((state) => state.eventTime);
  const setEventDate = useWeddingStore((state) => state.setEventDate);
  const setEventTime = useWeddingStore((state) => state.setEventTime);

  const isComing = useWeddingStore((state) => state.isComing);
  const setIsComing = useWeddingStore((state) => state.setIsComing);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      guestCount,
      eventDate,
      eventTime,
      isComing,
    });
  };

  return (
    <>
      <h1>{t("wedding.title")}</h1>
      <p>{t("wedding.desc")}</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={onSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label>{t("wedding.firstName")}</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label>{t("wedding.lastName")}</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label>{t("wedding.guests")}</label>
              <input
                type="number"
                min="0"
                value={guestCount}
                onChange={(e) => setGuestCount(+e.target.value)}
              />
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label>{t("wedding.eventDate")}</label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label>{t("wedding.eventTime")}</label>
                  <input
                    type="time"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label>{t("wedding.coming")}</label>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    checked={isComing}
                    onChange={() => setIsComing(true)}
                  />
                  <label className="pl-3">{t("wedding.yes")}</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    checked={!isComing}
                    onChange={() => setIsComing(false)}
                  />
                  <label className="pl-3">{t("wedding.no")}</label>
                </div>
              </div>
            </div>

            <div>
              <button>{t("wedding.submit")}</button>
            </div>
          </form>
        </div>
      </WhiteCard>

      <WhiteCard className="mt-5">
        <pre>
          {JSON.stringify(
            {
              firstName,
              lastName,
              guestCount,
              eventDate,
              eventTime,
              isComing,
            },
            null,
            2
          )}
        </pre>
      </WhiteCard>
    </>
  );
};
