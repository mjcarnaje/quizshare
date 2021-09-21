import React, { Fragment } from "react";

import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { IAlert, removeAlert, selectAlerts, unShowAlert } from "@store/alert";
import { useAppDispatch, useAppSelector } from "@store/index";

interface IAlertItemProps {
  alert: IAlert;
}

const AlertItem: React.FC<IAlertItemProps> = ({ alert }) => {
  const dispatch = useAppDispatch();

  const { id, show, title, description, status, isClosable } = alert;

  let Icon,
    textColor = "";

  switch (status) {
    case "success":
      Icon = CheckCircleIcon;
      textColor = "text-green-400";
      break;
    case "error":
      Icon = ExclamationCircleIcon;
      textColor = "text-red-400";
      break;
  }

  return (
    <Transition
      key={id}
      show={show}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={() => {
        dispatch(removeAlert(id));
      }}
    >
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {Icon && (
                <Icon className={`w-6 h-6 ${textColor}`} aria-hidden="true" />
              )}
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900">{title}</p>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
            <div className="flex flex-shrink-0 ml-4">
              {isClosable && (
                <button
                  className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => dispatch(unShowAlert(id))}
                >
                  <XIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

const Alert: React.FC = () => {
  const alerts = useAppSelector(selectAlerts);

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 z-50 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
    >
      <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
        {alerts.map((alert) => {
          return <AlertItem alert={alert} />;
        })}
      </div>
    </div>
  );
};

export default Alert;
