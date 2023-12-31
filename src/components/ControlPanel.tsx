import { createData } from "@/firebase/operation";
import React from "react";
import { InputTeamCountComponent } from "./InputTeamCount";

import { ResultType } from "@/Models";

interface ControlPanelComponentProps {
  totalResult: ResultType
  onClickHandler: (data: number) => void,
}

export const ControlPanelComponent: React.FC<ControlPanelComponentProps> = ({
  totalResult,
  onClickHandler
}) => {

  const showResultHandler = (): void => {
    const data: ResultType = totalResult
    createData(totalResult)
  }
  return (
    <div className="flex flex-row border-b-2 mb-10">
      <InputTeamCountComponent onClickHandler={onClickHandler} />
      <button className="text-white ml-3 w-50 h-9 bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700" onClick={showResultHandler}>Show result</button>
    </div>
  )
}