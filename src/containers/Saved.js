import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import SavedRecipeCards from './SavedRecipeCards';
import "./Saved.css";


export default function Saved() {
  return (
    <div>
      <SavedRecipeCards />
    </div>
  );
}