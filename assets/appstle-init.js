(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
            script.defer = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
            document.getElementsByTagName("body")[0].appendChild(script)
      };


      appstleLoadScript("https://cdn.shopify.com/s/files/1/0619/3761/4998/t/1/assets/appstle-subscription.js?v=1679409313");


      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#shopify-section-template--15828001226902__main > div > div:nth-child(2) > div > h2",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE",
            "cartRowSelector": "",
            "cartLineItemSelector": "",
            "cartLineItemPerQuantityPriceSelector": "",
            "cartLineItemTotalPriceSelector": "",
            "cartLineItemSellingPlanNameSelector": "",
            "cartSubTotalSelector" : "",
            "cartLineItemPriceSelector": "",
        },
        "enableCartWidgetFeature": "false",
        "useUrlWithCustomerId": "true",
        "atcButtonSelector": "div.product-form__buttons",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "lab-or.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Purchase Options",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "Subscription Options",
        "sellingPlanSelectTitle": "Subscription Plans",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Subscription detail",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your subscriptions<\/strong><br\/><br\/>Skip, reschedule, edit, or cancel deliveries anytime, based on your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "\u8A02\u95B1\u8A08\u5283",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions. Please use the same email address that you used to buy the subscription.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/per Item",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "widgetEnabled": true,
        "showTooltip" : false,
        "sortByDefaultSequence": true,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": true,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{sellingPlanPrice}}\/per Item)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : " {{totalPrice}}",
        "selectedDiscountFormat" : "Save {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 161,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "widgetEnabledOnSoldVariant": "false",
        "switchRadioButtonWidget": true,
        "appstlePlanName": "FREE",
        "appstlePlanFeatures": {
	"subscriptionOrderAmount": 500.0,
	"analytics": true,
	"enableSubscriptionManagement": true,
	"enableDunningManagement": true,
	"enableCustomerPortalSettings": true,
	"enableShippingProfiles": true,
	"enableProductSwapAutomation": false,
	"enableAdvancedSellingPlans": false,
	"enableSummaryReports": true,
	"enableCustomEmailDomain": false,
	"enableWidgetPlacement": false,
	"enableIntegrations": true,
	"enableSmsAlert": false,
	"enableCustomEmailHtml": false,
	"enableCancellationManagement": false,
	"enableBundling": false,
	"enableAutomation": false,
	"enableQuickActions": false,
	"enableExternalApi": false,
	"enableCartWidget": false,
	"enableAutoSync": false,
	"webhookAccess": false,
	"accessWidgetDesignOptions": false,
	"accessSubscriptionActivityLogs": true,
	"accessBuildABox": false,
	"accessResendEmail": false,
	"accessKlaviyoContactSync": false,
	"accessOneTimeProductUpsells": false,
	"accessAdvanceSubscriptionPlanOptions": false,
	"accessSplitContract": false,
	"accessDiscountOnCancellationAttempt": false,
	"accessQuickCheckout": false,
	"accessSubscriberLoyaltyFeatures": false,
	"accessBundling": false,
	"accessManualSubscriptionCreation": false,
	"accessAppstleMenu": false
},
        "formMappingAttributeName": "",
        "formMappingAttributeSelector": "",
        "quickViewModalPollingSelector": "",
        "scriptLoadDelay": "0",
        "formatMoneyOverride": "false",
        "appstle_app_proxy_path_prefix": "apps\/subscriptions",
        "updatePriceOnQuantityChange": "",
        "widgetParentSelector": "",
        "quantitySelector": "",
        "enableAddJSInterceptor": "false",
        "reBuyEnabled": "false",
        "loyaltyDetailsLabelText": "",
        "loyaltyPerkDescriptionText": "",
        "widgetTemplateHtml": `{% raw %}{% endraw %}`,
        "bundle": {},
        "labels": "{\"appstle.subscription.wg.yearsFrequencyTextV2\":\"Yearly\",\"appstle.subscription.wg.weekFrequencyTextV2\":\"Week\",\"appstle.subscription.wg.oneTimePurchaseTextV2\":\"One Time Purchase\",\"appstle.subscription.wg.loyaltyPerkDescriptionTextV2\":\"{{#isDiscountTypeFreeProduct}}<div style='display: flex;'><div style='height: 60px; width: 60px; flex-shrink: 0; margin-right: 10px;'><img style='width: 100%' src={{{featured_image}}}><\/img><\/div><div>After {{{billingCycleBlock}}} orders,<span style='color: #ffc000;font-weight: 700;';> get a FREE {{freeProductName}} <\/span><\/div><div>{{\/isDiscountTypeFreeProduct}}{{#isDiscountTypePercentage}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{discount}}}% OFF your entire order<\/span><\/span>.{{\/isDiscountTypePercentage}}{{#isDiscountTypeShipping}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>shipping at {{{formatDiscountedPrice}}}<\/span><\/span>.{{\/isDiscountTypeShipping}}{{#isDiscountTypeFixed}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{formatDiscountedPrice}}} OFF your entire order<\/span><\/span>.{{\/isDiscountTypeFixed}}\",\"appstle.subscription.wg.unsubscribeFrequencyTextV2\":\"unsubscribe\",\"appstle.subscription.wg.weeksFrequencyTextV2\":\"Weeks\",\"appstle.subscription.wg.oneTimeFrequencyTextV2\":\"One Time\",\"appstle.subscription.wg.dayFrequencyTextV2\":\"day\",\"appstle.subscription.wg.allowFulfilmentCountViaPropertiesV2\":\"false\",\"appstle.subscription.wg.monthsFrequencyTextV2\":\"Monthly\",\"appstle.subscription.wg.deliveryEveryFrequencyTextV2\":\"Delivery Every\",\"appstle.subscription.wg.subscribeAndSaveInitalV2\":\"Subscribe & save\",\"appstle.subscription.wg.offFrequencyTextV2\":\"Off\",\"appstle.subscription.wg.yearFrequencyTextV2\":\"Year\",\"appstle.subscription.wg.daysFrequencyTextV2\":\"Days\",\"appstle.subscription.wg.subscribeAndSaveSuccessV2\":\"Subscribe success\",\"appstle.subscription.wg.monthFrequencyTextV2\":\"Monthly\",\"appstle.subscription.wg.selectDeliverOptionV2\":\"select deliver option\"}",
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_subscription_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_subscription_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "span.price-item.price-item--regular.appstle_subscription_final_price,span.appstle_subscription_element.appstle_subscription_save{\ncolor:#355E7D!important\n}\n.appstle_subscription_save {\n  border: 1px solid #355E7D!important;\n}\ndiv.appstle_subscribe_option > div > div:nth-child(1), div.appstle_subscribe_option > div > div:nth-child(2), div.appstle_subscribe_option > div > div:nth-child(3){\nmargin-bottom: 12px!important;\n}",
            "customerPortalCss": "",
            "priceSelector": "span.price-item.price-item--regular",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE"
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

