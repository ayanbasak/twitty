package com.twitty.backend.util;

import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

@Component
public class DateUtil {
    private static final String DEFAULT_DATE_REGEX = "dd-MM-yyyy HH:mm:ss";  // 30-11-2021 11:01:55

    public static boolean isValidDate(String date) {
        SimpleDateFormat sdf = new SimpleDateFormat(DEFAULT_DATE_REGEX);
        try {
            sdf.parse(date);
        } catch (ParseException e) {
            return false;
        }
        return true;
    }

    public static Date convertStringToDate(String date) {
        SimpleDateFormat sdf = new SimpleDateFormat(DEFAULT_DATE_REGEX);
        try {
            return sdf.parse(date);
        } catch (ParseException e) {
//            return false;
        }
        return new Date();
    }

    public static String generateCurrentTime() {
        SimpleDateFormat sdf = new SimpleDateFormat(DEFAULT_DATE_REGEX);
        return sdf.format(new Date());
    }

    public static String modifyProfileCreationTime(String createdAt) {
        SimpleDateFormat sdf = new SimpleDateFormat(DEFAULT_DATE_REGEX);
        try {
            Date formatted_date = sdf.parse(createdAt);
            return new SimpleDateFormat("MMMM yyyy").format(formatted_date);
        } catch (ParseException e) {
            System.out.println(e);
        }
        return "";
    }

    public static String convertTimeDiff(String createdAt) {
        Date created_date = convertStringToDate(createdAt);
        long diffInMillies = Math.abs(new Date().getTime() - created_date.getTime());
        long diffInDays = TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);
        if(diffInDays < 1){
            long diffInHours = TimeUnit.HOURS.convert(diffInMillies, TimeUnit.MILLISECONDS);
            if(diffInHours < 1){
                long diffInMinutes = TimeUnit.MINUTES.convert(diffInMillies, TimeUnit.MILLISECONDS);
                return diffInMinutes + "mi";
            }
            return diffInHours + "h";
        }else if(diffInDays > 365){
            return (diffInDays / 365) + "y";
        }
        return (diffInDays / 30) + "m";
    }
}

/*

    public String getCurrentTimeToString(String regex){
        SimpleDateFormat sdf = new SimpleDateFormat(regex);
        return sdf.format(new Date());
    }

    public Date getTimeFromStringToDate(String date){
        SimpleDateFormat sdf = new SimpleDateFormat(defaultRegex);
        Date formattedDate = null;
        try {
            formattedDate = sdf.parse(date);
        } catch (ParseException e) {
            System.out.println(e);
        }
        return formattedDate;
    }

    public String getTimeFromString(String date){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String formattedDate = null;
        try {
            formattedDate = sdf.format(sdf.parse(date));
        } catch (ParseException e) {
            // 2021-11-30 11:01:55
            System.out.println(e);
        }
        return formattedDate;
    }
*/