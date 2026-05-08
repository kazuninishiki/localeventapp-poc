haversine - Direct A to B — straight line through air, not streets
still useful, straight line through air A to B, 

does not do 

You → turn left → road → bridge → Event
            (8.1km actual drive)

Why straight line still useful:

"Events near you" sorting → relative distance good enough
Don't need exact route, just "is this event 1km or 50km away"
Show "~5km away" not turn-by-turn

zero cost, no api needed

--

TanStack Query (queryClient)

Manages all async data fetching — replaces writing by oneself.

bookmarks are local, no need to overthink design because no requirement for server data/user profile data.

flatlist for scroll view, basic default, no overloading.

open in google maps link : no API usage needed, fast, rely on third party location eatils is better. tho visually it is not pleaseing. since it is mvp, we can proabbly accept this?

--

Common snippets:
Shortcut Generates 
rnf  basic function component
rnfe function component with export
rnfs component with StyleSheet
imr  import React
imrn import from react-native


SafeAreaView = important on iOS:
without it → content renders behind notch/status bar
with it    → content starts below notch automatically
