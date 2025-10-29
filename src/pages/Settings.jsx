import React, { useState } from "react";

import { BsChevronDown } from "react-icons/bs";

const Settings = () => {
  const [enableNotifications, setEnableNotifications] = useState(false);
  const [notificationSound, setNotificationSound] = useState(false);
  const [doNotDisturb, setDoNotDisturb] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [inAppNotifications, setInAppNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [notificationSoundLang, setNotificationSoundLang] = useState(false);
  const [doNotDisturbLang, setDoNotDisturbLang] = useState(false);

  const [systemLanguage, setSystemLanguage] = useState("English");

  const language = ["English", "Indonesia", "Japanese"];

  const ToggleButton = ({ isOn, onToggle }) => (
    <button
      onClick={onToggle}
      className={`min-w-[50px] h-[32px] rounded-full relative transition-colors ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-[24px] h-[24px] bg-white rounded-full transition-transform ${
          isOn ? "translate-x-4" : "translate-x-0"
        }`}
      ></span>
    </button>
  );

  return (
    <div className="container">
      <h2 className="font-bold">Settings</h2>
      <div className="mt-[52px]">
        <div className="flex max-xl:flex-col max-xl:gap-[20px]">
          <div className="min-w-[364px]">
            <p className="text-title font-bold">General notifications</p>
          </div>
          <div className="flex flex-col gap-[32px] w-full">
            <div className="flex justify-between">
              <div>
                <p className="text-subtitle font-medium">
                  Enable Notifications
                </p>
                <p className="opacity-[60%]">
                  Turn all notifications on or off for your account.
                </p>
              </div>
              <ToggleButton
                isOn={enableNotifications}
                onToggle={() => setEnableNotifications(!enableNotifications)}
              />
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-subtitle font-medium">Notification Sound</p>
                <p className="opacity-[60%]">
                  Play a sound when a new alert is received.
                </p>
              </div>
              <ToggleButton
                isOn={notificationSound}
                onToggle={() => setNotificationSound(!notificationSound)}
              />
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-subtitle font-medium">Do Not Disturb Mode</p>
                <p className="opacity-[60%]">
                  Set quiet hours to mute notifications during specific times.
                </p>
              </div>
              <ToggleButton
                isOn={doNotDisturb}
                onToggle={() => setDoNotDisturb(!doNotDisturb)}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black/[.1] my-[32px]"></div>
        <div className="flex max-xl:flex-col max-xl:gap-[20px]">
          <div className="min-w-[364px]">
            <p className="text-title font-bold">Delivery methods</p>
          </div>
          <div className="flex flex-col gap-[32px] w-full">
            <div className="flex justify-between">
              <div>
                <p className="text-subtitle font-medium">Email Notifications</p>
                <p className="opacity-[60%]">
                  Receive important system and operational updates via email.
                </p>
              </div>
              <ToggleButton
                isOn={emailNotifications}
                onToggle={() => setEmailNotifications(!emailNotifications)}
              />
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-subtitle font-medium">SMS Notifications</p>
                <p className="opacity-[60%]">
                  Get critical alerts and reminders through text messages.
                </p>
              </div>
              <ToggleButton
                isOn={smsNotifications}
                onToggle={() => setSmsNotifications(!smsNotifications)}
              />
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-subtitle font-medium">
                  In-App Notifications
                </p>
                <p className="opacity-[60%]">
                  View notifications directly within the dashboard.
                </p>
              </div>
              <ToggleButton
                isOn={inAppNotifications}
                onToggle={() => setInAppNotifications(!inAppNotifications)}
              />
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-subtitle font-medium">Push Notifications</p>
                <p className="opacity-[60%]">
                  Receive real-time alerts on your mobile device.
                </p>
              </div>
              <ToggleButton
                isOn={pushNotifications}
                onToggle={() => setPushNotifications(!pushNotifications)}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black/[.1] my-[32px]"></div>
        <div className="flex max-xl:flex-col max-xl:gap-[20px]">
          <div className="min-w-[364px]">
            <p className="text-title font-bold">Language & region</p>
          </div>
          <div className="flex flex-col gap-[32px] w-full">
            <div className="flex justify-between">
              <div>
                <p className="text-subtitle font-medium">System Language</p>
                <p className="opacity-[60%]">Choose the default language.</p>
              </div>
              <select className="text-small h-fit">
                <button>
                  <selectedcontent></selectedcontent>
                  <span className="picker">
                    <BsChevronDown />
                  </span>
                </button>
                {language.map((lang) => (
                  <option
                    key={lang}
                    onClick={() => setSystemLanguage(lang)}
                    className={`rounded-full text-sm`}
                  >
                    {lang}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-subtitle font-medium">Notification Sound</p>
                <p className="opacity-[60%]">
                  Play a sound when a new alert is received.
                </p>
              </div>
              <ToggleButton
                isOn={notificationSoundLang}
                onToggle={() =>
                  setNotificationSoundLang(!notificationSoundLang)
                }
              />
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-subtitle font-medium">Do Not Disturb Mode</p>
                <p className="opacity-[60%]">
                  Set quiet hours to mute notifications during specific times.
                </p>
              </div>
              <ToggleButton
                isOn={doNotDisturbLang}
                onToggle={() => setDoNotDisturbLang(!doNotDisturbLang)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
