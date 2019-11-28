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
import Drawer from "@material-ui/core/Drawer"
import { makeStyles } from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Description from "@material-ui/icons/Description"
import { Link, withRouter } from "react-router-dom"

export default withRouter(props => {
    const styles = makeStyles(theme => ({
        list: {
            width: 300
        },
        link: {
            color: 'inherit',
            textDecoration: 'none'
        }
    }))()

    const inputs = {
        "/": "Home"
    }

    let items = []

    for (const item in inputs) {
        items.push(
            <ListItem button key={inputs[item]}>
                <ListItemIcon>
                    <Description />
                </ListItemIcon>
                <Link to={item} className={styles.link}>
                    <ListItemText primary={inputs[item]} />
                </Link>
            </ListItem>
        )
    }

    return (
        <Drawer open={props.open} onClose={props.notifyParentOfClose}>
            <div className={styles.list} role="presentation">
                {items}
            </div>
        </Drawer>
    )
})
