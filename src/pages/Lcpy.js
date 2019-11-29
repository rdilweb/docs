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
import ReactMarkdown from "react-markdown"
import ContentWrapper from "../components/ContentWrapper"
import Typography from "@material-ui/core/Typography"
import Helmet from "react-helmet"

export default props => {
    return (
        <div>
            <Helmet>
                <title>lcpy - RDIL Web Docs</title>
            </Helmet>
            <Typography>
                <ContentWrapper
                    display={
                        <ReactMarkdown
                            source={`
# lcpy

\`lcpy\` is a simple Python library that allows you to use the lowercase version of common values.

A bit of time ago, I taught some people how to write Python, and they both kept forgetting to add
the first letter as uppercase. This library is for them. The great thing about the library's design
is that it is made for beginners and advanced developers alike.
                            `}
                        />
                    }
                />
            </Typography>
        </div>
    )
}
