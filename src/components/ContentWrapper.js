/**
 * RDIL Web Docs - Documentation for some RDIL products.
 * Copyright (C) 2019-present  Reece Dunham
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import React from "react"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

export default props => {
    const classes = makeStyles(theme => ({
        paper: {
            margin: "15px",
            padding: "15px"
        }
    }))()

    return <Paper className={classes.paper}>{props.display}</Paper>
}
