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
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import NavDrawer from "./components/NavDrawer"
import NavBar from "./components/NavBar"
import DocsTheme from "./util/DocsTheme"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Lcpy from "./pages/Lcpy"

export default props => {
    const [drawerOpen, setDrawerOpen] = React.useState(false)

    const toggleDrawer = event => {
        if (
            !(
                event.type === "keydown" &&
                (event.key === "Tab" || event.key === "Shift")
            )
        ) {
            setDrawerOpen(!drawerOpen)
        }
    }

    return (
        <ThemeProvider theme={DocsTheme}>
            <NavBar openDrawer={toggleDrawer} />
            <BrowserRouter>
                <NavDrawer
                    notifyParentOfClose={pushable => setDrawerOpen(false)}
                    open={drawerOpen}
                />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/lcpy">
                        <Lcpy />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}
