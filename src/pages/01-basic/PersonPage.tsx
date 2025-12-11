import { WhiteCard } from "../../components";
import { usePersonStore } from "../../stores";
import { useTranslation } from "react-i18next";

export const PersonPage = () => {
  const { t } = useTranslation();

  const firstName = usePersonStore((state) => state.firstName);
  const lastName = usePersonStore((state) => state.lastName);
  const setFirstName = usePersonStore((state) => state.setFirstName);
  const setLastName = usePersonStore((state) => state.setLastName);

  return (
    <>
      <h1>{t("person.title")}</h1>
      <p>{t("person.desc")}</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    {t("person.firstName")}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder={t("person.firstNamePlaceholder")}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    {t("person.lastName")}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder={t("person.lastNamePlaceholder")}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <pre className="bg-gray-200 p-5 rounded-[20px]">
              {JSON.stringify(
                { firstName, lastName },
                null,
                2
              )}
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};
