import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const NoDataPlaceholder = ({ title }: { title: string }) => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h3">{`No ${title} Available!`}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NoDataPlaceholder;
