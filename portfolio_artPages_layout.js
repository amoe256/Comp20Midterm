        function photo(source, atr, artist, name) {
            this.source = source;
            this.atr = atr;
            this.artist = artist;
            this.name = name;
        }

        function printRows(picture_array) {
            var str = "";
            for (i = 0; i < picture_array.length; i+=4) {
                str += "<div class='row'>";
                str += printColumns(i, picture_array);
                str += "</div>";
            }
            return str;
        }

        function printColumns(index, array) {
            num = array.length - index;
            max_index = index + 4;

            // If statement used to determine whether index + 3 will exceed length of the array
            if ((array.length - index) >= 4) {
                num = index + 4;
            }
            else {
                num = index + num;
            }

            var str = "";
            while (index < num) {
                str += "<div class='column'>";
                str += "<img src='" + array[index].source + "' id='" + array[index].artist + '_' + array[index].name + "' attribute='" + array[index].atr + "'/>";
                str += "<div class='col_art_name'>" + "<b>" + array[index].name + "</b>" + "</div>";
                str += "<div class='col_artist_name'>" + "By " + array[index].artist + "</div>";
                str += "</div>";
                index += 1;
            }

            /* Putting in blank columns to make it 4 columns per row (keeps sizing for the columns
            proportional) */
            while (index < max_index) {
                str += "<div class='column'></div>";
                index +=1;
            }
            return str;
        }