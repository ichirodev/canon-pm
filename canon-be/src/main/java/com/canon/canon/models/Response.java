package com.canon.canon.models;

public class Response {
    private String title;
    private String description;
    private long errorCode;
    private String moreDetails;

    public Response(String title, String description) {
        this.title = title;
        this.description = description;
    }
    private Response(long errorCode, String title, String description, String moreDetails) {
        this.title = title;
        this.description = description;
        this.moreDetails = moreDetails;
        this.errorCode = errorCode;
    }
    public static Response ResponseError(long errorCode, String title, String description, String moreDetails) {
        return new Response(errorCode, title, description, moreDetails);
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(long errorCode) {
        this.errorCode = errorCode;
    }

    public String getMoreDetails() {
        return moreDetails;
    }

    public void setMoreDetails(String moreDetails) {
        this.moreDetails = moreDetails;
    }
}
