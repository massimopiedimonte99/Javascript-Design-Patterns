var series = {
    print_type: function(title, type) {
        console.log("The type of: " + title + " is: " + type)
    },
    print_dur: function(title, dur) {
        console.log("Each episode of: " + title + " is " + dur + " long")
    },
    print_title: function(title) {
        console.log("The title of this program is: " + title)
    }
}

/** Execute the function passed as first argument and take all of the other arguments as arguments of this function */
series.execute = function(function_name) {
    return series[function_name].apply(series, [].slice.call(arguments, 1))
}

/** Tests */
series.execute("print_title", "Tokyo Ghoul")
series.execute("print_dur", "Sakurasou no Pet na Kanojo", "24min")
series.execute("print_type", "Welcome to the N.H.K", "anime/dramatic")