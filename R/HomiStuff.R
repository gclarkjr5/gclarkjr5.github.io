# rm(list = ls())

# library(dplyr)
# library(tidyr)
# library(ggplot2)
# library(lubridate)
# library(plotly)
# library(jsonlite)

# needs(dplyr)
# needs(tidyr)
# needs(lubridate)
# needs(jsonlite)

# x <- attach(input[[1]])

# path <- "C:\\Users\\Gary Clark Jr\\Documents\\Brackets\\Homicide Data\\gclarkjr5.github.io\\R\\Homicide Stats"
# setwd(path)
# files_names <- list.files(path, full.names = T, pattern = ".csv")
# files <- list.files(path, pattern = ".csv")
# 
# csv_list_square <- lapply(files, function(x){
#   a <- read.csv(x, skip = 5, blank.lines.skip = T, skipNul = T, stringsAsFactors = F)
#   a <- a[,colSums(is.na(a))<nrow(a)]
#   
#   if(a[1,1] == ""){
#     a_sub <- a[2:5,1:6]
#   } else {
#     a_sub <- a[1:4,1:6]
#   }
#   
#   a_commas <- lapply(a_sub[,2:ncol(a_sub)], function(y){
#     y <- sub(",", "", y)
#     as.numeric(y)
#   })
#   
#   a_df <- data.frame("Victim Category" = a_sub[,1], a_commas, stringsAsFactors = F)
#   colnames(a_df)[2] <- "Total.Victims"
#   
#   a_sums <- lapply(a_df[,3:6], function(y){
#     sum(y)
#   })
#   
#   a_df <- data.frame(a_df, a_sums, stringsAsFactors = F)
#   
#   a_df <- a_df %>%
#     mutate(Year = paste0(gsub(".csv", "", x), "-01-01"), Cumulative.of.Year = sum(Total.Victims))
#   
#   # colnames(a_df) <- gsub("1", "Offender.Total", colnames(a_df))
#   
#   a_df
# 
# })
# 
# a <- csv_list_square[[1]]
# # b <- csv_list_square[[15]]
# 
# csv_list_long <- lapply(csv_list_square, function(x){
# 
#   x <- x %>%
#     gather(key = "Offender.Category", value = "Amount.Combo", 3:6) %>%
#     select(Year, Victim.Category, Offender.Category, Amount.Combo, Total.Victims, Cumulative.of.Year)
#   
#   x <- as.matrix(x)
#   x[which(grepl("Black",x, ignore.case = T)==T)] <- "Black"
#   x[which(grepl("White",x, ignore.case = T)==T)] <- "White"
#   x[which(grepl("Other",x, ignore.case = T)==T)] <- "Other"
#   x[which(grepl("Unknown",x, ignore.case = T)==T)] <- "Unknown"
#   
#   x <- data.frame(x)
#   
#   x$Amount.Combo <- as.numeric(as.character(x$Amount.Combo))
#   x$Total.Victims <- as.numeric(as.character(x$Total.Victims))
#   x$Cumulative.of.Year <- as.numeric(as.character(x$Cumulative.of.Year))
# 
#   
#   x <- x %>%
#     group_by(Year, Offender.Category, Victim.Category) %>%
#     summarise(percent_per_combo = round((Amount.Combo/Cumulative.of.Year)*100, digits = 2),
#               percent_per_combo.amount_as_victim = round((Amount.Combo/Total.Victims)*100, digits = 2),
#               percent_as_victim = round((Total.Victims/Cumulative.of.Year)*100, digits = 2))
#   
#   x$Year <- ymd(x$Year, tz = "America/Chicago")
#   
#   x
# })
# 
# c <- csv_list_long[[1]]
# 
# 
# names(csv_list_square) <- sub(".csv", "", files)
# 
# names(csv_list_long) <- sub(".csv", "", files)
# 
# all_dfs_square <- Reduce(function(x, y) merge(x, y, all=T), csv_list_square)
# all_dfs_long <- Reduce(function(x, y) merge(x, y, all=T), csv_list_long)
# 
# Combos.to.all.Victims <- all_dfs_long %>%
#   ggplot(aes(x = Year, y = percent_per_combo, group = interaction(Offender.Category, Victim.Category))) + 
#   geom_smooth(aes(col = Offender.Category, linetype = Victim.Category), method = "lm", se = F)
# 
# # ggplotly(Combos.to.all.Victims)
# 
# Combos.to.Victims.in.Race <- all_dfs_long %>%
#   ggplot(aes(x = Year, y = percent_per_combo.amount_as_victim, group = interaction(Offender.Category, Victim.Category))) + 
#   geom_smooth(aes(col = Offender.Category, linetype = Victim.Category), method = "lm", se = F)
# 
# # ggplotly(Combos.to.Victims.in.Race)
# 
# Wholes <- all_dfs_long %>%
#   ggplot(aes(x = Year, y = percent_as_victim)) + 
#   geom_smooth(aes(col = Victim.Category), method = "lm", se = F)
# 
# # ggplotly(Wholes)
# 
# DF_json <- prettify(toJSON(all_dfs_long))
# 
# write(DF_json, "Rdata.json")
# 
# print(all_dfs_long)
x <- "Hello World"
print(x)