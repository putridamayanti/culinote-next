import Image from "next/image";
import styles from "./page.module.css";
import {Box, Button, Stack, Typography} from "@mui/material";
import BlankCard from "components/cards/BlankCard";
import {Add, Search} from "@mui/icons-material";
import SearchRecipe from "components/pages/home/SearchRecipe";
import TrendingRecipe from "components/pages/home/TrendingRecipe";

export default function Home() {
  return (
      <>
        <SearchRecipe/>
          {/*<TrendingRecipe/>*/}
      </>
  );
}
